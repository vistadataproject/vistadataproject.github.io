---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU UPDATE RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU UPDATE RECORD{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This API updates the record named in the TIUDA parameter, with theinformation contained in the TIUX(Field #) array.  The body of themodified TIU document should be passed in the TIUX(\TEXT\,i,0) subscript,where i is the line number (i.e., the \TEXT\ node should be ready to MERGEwith a word processing field).  Any filing errors which may occur will bereturned in the single valued ERR parameter (which is passed byreference).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ERR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the return parameter, which is passed by reference.  If an erroroccurs, it will be a pointer to the FM dialog file followed by the integer1 in the second \^\-piece (e.g., 8925001^1).{:/} | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # (IEN) of the TIU Document in file #8925.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the input array which contains the data to be filed in themodified document.  It should look something like this: TIUX(.02)=45678TIUX(1301)=2960703.104556TIUX(1302)=293764TIUX(\TEXT\,1,0)=\The patient is a 70 year old WHITE MALE, who presentedto the ONCOLOGY CLINIC\TIUX(\TEXT\,2,0)=\On JULY 3, 1996@10:00 AM, with the chief complaint ofNECK PAIN...\{:/} | 
| {::nomarkdown}SUPPRESS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This BOOLEAN Flag is passed in to suppress the call to the COMMIT CODE forthe TIU DOCUMENT in question (i.e., SUPPRESS=1 ==> don't execute commitcode; SUPPRESS=0 or UNDEFINED ==> DO execute commit code).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | UPDATE^[TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 Method comment | Update existing Document
 Input parameters | {::nomarkdown}TIUDA<br>TIUX<br>SUPPRESS{:/}
 Code | {::nomarkdown}  N TIU,TIUI,TIUC,TIUD0,TIUD12,TIUD14,TIUD15,TIUCPF,TITLE,PRFUNLNK,TIUY,TIUCC,TIUFLAG S TIUFLAG=0<br> I $S(+$G(TIUDA)'>0:1,'$D(^TIU(8925,+TIUDA,0)):1,1:0) D  Q<br> . S SUCCESS="0^ Cannot update a non-existent document..."<br> I +$P($G(^TIU(8925,+TIUDA,0)),U,5)>6 D  Q<br> . S SUCCESS="0^ TIU Document #"_TIUDA_" is already signed..."<br> I $D(TIUX("TEXT")) D<br> . K ^TIU(8925,+TIUDA,"TEMP")<br> . M ^TIU(8925,+TIUDA,"TEMP")=TIUX("TEXT")<br> . S (TIUC,TIUI)=0<br> . F  S TIUI=$O(^TIU(8925,+TIUDA,"TEMP",TIUI)) Q:+TIUI'>0  D<br> . . S TIUC=TIUC+1<br> . I +TIUC>0 S ^TIU(8925,+TIUDA,"TEMP",0)="^^"_TIUC_U_TIUC_U_DT_"^^"<br> . K TIUX("TEXT")<br> I +$O(TIUX(""))'>0 S:+$G(SUPPRESS) SUCCESS=+TIUDA Q<br> S TIUD0=$G(^TIU(8925,TIUDA,0)),TIUD12=$G(^(12)),TIUD14=$G(^(14)),TITLE=+TIUD0<br> S TIUCPF=+$$ISA^TIULX(TITLE,+$$CLASS^TIUCP)<br> D SETCOS^TIUSRVP2(TIUDA,.TIUX,TIUD0,TIUD12)<br> S TIUCC=$P($G(TIUD14),"^",5)<br> I +$G(TIUX("1405"))>0,+$G(TIUCC)>0,(+$G(TIUX("1405"))'=+TIUCC) D ROLLBACK^TIUCNSLT(TIUDA) S TIUFLAG=1<br> I +$G(TIUX(.01))>0,(+$G(TIUX(.01))'=+TIUD0) D<br> . S TIUX(.04)=$$DOCCLASS^TIULC1(+$G(TIUX(.01)))<br> . S TIUY=0 D ISCNSLT^TIUCNSLT(.TIUY,TITLE)<br> . I $G(TIUY),TIUFLAG=0 D ROLLBACK^TIUCNSLT(TIUDA) ;  if changed to Non-Consult title - VMP/RJT - *239<br> . ; If change title from PRF to nonPRF, set flg to unlink note:<br> . I $$ISPFTTL^TIUPRFL(TITLE),'$$ISPFTTL^TIUPRFL(+$G(TIUX(.01))) S PRFUNLNK=1<br> D FILE(.SUCCESS,+TIUDA,.TIUX,+$G(SUPPRESS),TIUCPF)<br> I +SUCCESS'>0 K ^TIU(8925,+TIUDA,"TEMP") Q<br> I $G(PRFUNLNK) D UNLINK^TIUPRF1(TIUDA)<br> D GETTIU^TIULD(.TIU,TIUDA)<br> I $D(^TIU(8925,+TIUDA,"TEMP")) D<br> . K ^TIU(8925,+TIUDA,"TEXT")<br> . D MERGTEXT^TIUEDI1(+TIUDA,.TIU)<br> . K ^TIU(8925,+TIUDA,"TEMP")<br> . S:'+$G(SUCCESS) SUCCESS=+TIUDA<br> S TIUD15=$G(^TIU(8925,+TIUDA,15))<br> I +TIUD15 D<br> . N TIUBY,DR,DIE,DA,X,Y S TIUBY=$P(TIUD15,U,2) Q:+TIUBY'>0<br> . S DR="1503///^S X=$$SIGNAME^TIULS("_TIUBY_");1504///^S X=$$SIGTITL^TIULS("_TIUBY_")"<br> . S DA=TIUDA,DIE=8925 D ^DIE<br> I '+$G(SUPPRESS) D<br> . I +$P(TIUD0,U,5)<5,'$D(TIUX(.05)) D UPDSTAT(TIUDA,+$G(TIUD0))<br> . D SEND^TIUALRT(TIUDA),SENDID^TIUALRT1(TIUDA):+$G(^TIU(8925,+TIUDA,21))<br> . D UPDTIRT^TIUDIRT(.TIU,TIUDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}