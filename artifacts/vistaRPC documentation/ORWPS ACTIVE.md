---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns listing of a patient's active inpatient and outpatientmedications.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}VIEW{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}UPDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is use to determine if the parameter that stored the user view preference is updated. This should be set to 1 if called from CPRS and set to 0 if called from another application.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ACTIVE^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | retrieve active inpatient & outpatient meds
 Input parameters | {::nomarkdown}DFN, USER, VIEW, UPDATE{:/}
 Code | {::nomarkdown}  K ^TMP("PS",$J)<br> K ^TMP("ORACT",$J)<br> N BEG,DATE,END,ERROR,CTX,STVIEW<br> S (BEG,END,CTX)=""<br> S VIEW=+$G(VIEW)<br> S UPDATE=+$G(UPDATE)<br> I VIEW=0,UPDATE=0 S VIEW=1<br> S CTX=$$GET^XPAR("ALL","ORCH CONTEXT MEDS")<br> I CTX=";" D DEL^XPAR("USR.`"_DUZ,"ORCH CONTEXT MEDS")<br> S CTX=$$GET^XPAR("ALL","ORCH CONTEXT MEDS")<br> S BEG=$$DT($P(CTX,";")),END=$$DT($P(CTX,";",2))<br> I +$G(USER)=0 S USER=DUZ<br> I UPDATE=1 D<br> .S STVIEW=$$GET^XPAR($G(USER)_";VA(200,","OR MEDS TAB SORT",1,"I")<br> .I VIEW>0,+STVIEW'=VIEW D PUT^XPAR(DUZ_";VA(200,","OR MEDS TAB SORT",,VIEW,.ERROR) S STVIEW=VIEW<br> .I VIEW=0,+STVIEW=0 D PUT^XPAR(DUZ_";VA(200,","OR MEDS TAB SORT",,"1",.ERROR) S STVIEW=1,VIEW=1<br> .I VIEW=0,+STVIEW'=VIEW S VIEW=+STVIEW<br> .S LST(0)=STVIEW_U<br> .S DATE=""<br> .I BEG>0,END>0 S DATE=" ("_$$FMTE^XLFDT(BEG,2)_"-"_$$FMTE^XLFDT(END,2)_")"<br> .;I +BEG=0!(+END=0) S DATE=" (To set a specific date range go to Tools|Options|Other Parameters)"<br> .S LST(0)=LST(0)_DATE<br> D OCL^PSOORRL(DFN,BEG,END,VIEW)<br> N ITMP,FIELDS,INSTRUCT,COMMENTS,REASON,NVSDT,TYPE,ILST,J S ILST=0<br> S ITMP="" F  S ITMP=$O(^TMP("PS",$J,ITMP)) Q:'ITMP  D<br> . K INSTRUCT,COMMENTS,REASON<br> . K ^TMP("ORACT",$J,"COMMENTS")<br> . S COMMENTS="^TMP(""ORACT"",$J,""COMMENTS"")"<br> . S (INSTRUCT,@COMMENTS)="",FIELDS=^TMP("PS",$J,ITMP,0)<br> . I +$P(FIELDS,"^",8),$D(^OR(100,+$P(FIELDS,"^",8),8,"C","XX")) D<br> . . S $P(^TMP("PS",$J,ITMP,0),"^",2)="*"_$P(^TMP("PS",$J,ITMP,0),"^",2) ;dan testing<br> . S TYPE=$S($P($P(FIELDS,U),";",2)="O":"OP",1:"UD")<br> . I $D(^TMP("PS",$J,ITMP,"CLINIC",0)) S TYPE="CP"<br> . N LOC,LOCEX S (LOC,LOCEX)=""<br> . I TYPE="CP" S LOC=$G(^TMP("PS",$J,ITMP,"CLINIC",0))<br> . S:LOC LOCEX=$P($G(^SC(+LOC,0)),U)_":"_+LOC ;IMO NEW<br> . I TYPE="OP",$P(FIELDS,";")["N" S TYPE="NV"          ;non-VA med<br> . I $O(^TMP("PS",$J,ITMP,"A",0))>0 S TYPE="IV"<br> . I $O(^TMP("PS",$J,ITMP,"B",0))>0 S TYPE="IV"<br> . I (TYPE="UD")!(TYPE="CP") D UDINST(.INSTRUCT,ITMP)<br> . I TYPE="OP" D OPINST(.INSTRUCT,ITMP)<br> . I TYPE="IV" D IVINST(.INSTRUCT,ITMP)<br> . I TYPE="NV" D NVINST(.INSTRUCT,ITMP),NVREASON(.REASON,.NVSDT,ITMP)<br> . I (TYPE="UD")!(TYPE="IV")!(TYPE="NV")!(TYPE="CP") D SETMULT(COMMENTS,ITMP,"SIO")<br> . M COMMENTS=@COMMENTS<br> . I $D(COMMENTS(1)) S COMMENTS(1)="\"_COMMENTS(1)<br> . S:TYPE="NV" $P(FIELDS,U,4)=$G(NVSDT)<br> . I LOC S LST($$NXT)="~CP:"_LOCEX_U_FIELDS<br> . E  S LST($$NXT)="~"_TYPE_U_FIELDS<br> . S J=0 F  S J=$O(INSTRUCT(J)) Q:'J  S LST($$NXT)=INSTRUCT(J)<br> . S J=0 F  S J=$O(COMMENTS(J)) Q:'J  S LST($$NXT)="t"_COMMENTS(J)<br> . S J=0 F  S J=$O(REASON(J)) Q:'J  S LST($$NXT)="t"_REASON(J)<br> K ^TMP("PS",$J)<br> K ^TMP("ORACT",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}