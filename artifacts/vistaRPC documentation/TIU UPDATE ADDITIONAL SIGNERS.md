---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU UPDATE ADDITIONAL SIGNERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU UPDATE ADDITIONAL SIGNERS{:/}
 tag | {::nomarkdown}IDSIGNRS{:/}
 routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC accepts a list of persons, and adds them as additional signersfor the document identified by the first parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # (ien) of the document in file 8925.{:/} | 
| {::nomarkdown}TIULIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of users, passed by reference, as shown below:        TIULIST(1)=213[^CASEY,BEN]       TIULIST(2)=73425[^HOWSER,DOOGEY]       TIULIST(3)=172[^WELBY,MARCUS] NOTE that names passed as second '^'-pieces are optional.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IDSIGNRS^[TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 Method comment | Add list of Add'l Signers for a TIU Document
 First comment | {::nomarkdown}<pre> TIULIST(TIUI) [By Ref] = array of users to add/remove as signers<br/> TIUDA                  = IEN in ^TIU(8925,</pre>{:/}
 Input parameters | {::nomarkdown}TIUDA<br>TIULIST{:/}
 Code | {::nomarkdown}  N TIUI S TIUI=0<br> F  S TIUI=$O(TIULIST(TIUI)) Q:+TIUI'>0  D<br> . N DA,DIC,DLAYGO,DIE,DR,X,Y<br> . N TIUSIG,TIUSN ;TIU*1.0*255<br> . ; if current user is already an additional signer, and current user<br> . ; is NOT being removed as an additional signer, then QUIT<br> . I +$O(^TIU(8925.7,"AE",TIUDA,+TIULIST(TIUI),0)),($P(TIULIST(TIUI),U,3)'="REMOVE") Q<br> . ; if current user is being removed as a cosigner, then remove him<br> . ; TIU*255 Quit if attempting to remove someone who already signed<br> . ;I $P(TIULIST(TIUI),U,3)="REMOVE" D REMSIGNR(TIUDA,+TIULIST(TIUI)) Q<br> . S TIUSIG=$O(^TIU(8925.7,"AE",TIUDA,+TIULIST(TIUI),0)) S:$G(TIUSIG) TIUSN=$P($G(^TIU(8925.7,TIUSIG,0)),"^",4)<br> . Q:$G(TIUSN)  I $P(TIULIST(TIUI),U,3)="REMOVE" D REMSIGNR(TIUDA,+TIULIST(TIUI)) Q<br> . ; otherwise, add the current user as an additional signer<br> . S X=""""_"`"_TIUDA_"""",(DIC,DLAYGO)=8925.7,DIC(0)="LX" D ^DIC Q:+Y'>0<br> . S DIE=DIC,TIUY=$G(TIUY)_$S($G(TIUY)]"":U,1:"")_+TIULIST(TIUI)<br> . S DR=".02////"_0_";.03////"_+$G(TIULIST(TIUI))<br> . D ^DIE<br> . D SEND^TIUALRT(TIUDA){:/}


### CPRS

[rTIU.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}