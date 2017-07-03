---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU UPDATE ADDITIONAL SIGNERS
# TIU UPDATE ADDITIONAL SIGNERS

This RPC accepts a list of persons, and adds them as additional signersfor the document identified by the first parameter.

Property | Value
--- | ---
Label | IDSIGNRS
Routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record # (ien) of the document in file 8925.
TIULIST | LIST |  | true | This is the list of users, passed by reference, as shown below:        TIULIST(1)&#x3D;213[^CASEY,BEN]       TIULIST(2)&#x3D;73425[^HOWSER,DOOGEY]       TIULIST(3)&#x3D;172[^WELBY,MARCUS] NOTE that names passed as second &#x27;^&#x27;-pieces are optional.



### MUMPS Method Description

Property | Value
--- | ---
Method | [IDSIGNRS^TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
Method Comment | Add list of Add&#x27;l Signers for a TIU Document
Input Parameters | TIUDA, TIULIST
First Comment | {::nomarkdown}<pre><code> TIULIST(TIUI) [By Ref] = array of users to add/remove as signers<br/> TIUDA                  = IEN in ^TIU(8925,</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUI S TIUI=0<br/> F  S TIUI=$O(TIULIST(TIUI)) Q:+TIUI'>0  D<br/> . N DA,DIC,DLAYGO,DIE,DR,X,Y<br/> . N TIUSIG,TIUSN ;TIU*1.0*255<br/> . ; if current user is already an additional signer, and current user<br/> . ; is NOT being removed as an additional signer, then QUIT<br/> . I +$O(^TIU(8925.7,"AE",TIUDA,+TIULIST(TIUI),0)),($P(TIULIST(TIUI),U,3)'="REMOVE") Q<br/> . ; if current user is being removed as a cosigner, then remove him<br/> . ; TIU*255 Quit if attempting to remove someone who already signed<br/> . ;I $P(TIULIST(TIUI),U,3)="REMOVE" D REMSIGNR(TIUDA,+TIULIST(TIUI)) Q<br/> . S TIUSIG=$O(^TIU(8925.7,"AE",TIUDA,+TIULIST(TIUI),0)) S:$G(TIUSIG) TIUSN=$P($G(^TIU(8925.7,TIUSIG,0)),"^",4)<br/> . Q:$G(TIUSN)  I $P(TIULIST(TIUI),U,3)="REMOVE" D REMSIGNR(TIUDA,+TIULIST(TIUI)) Q<br/> . ; otherwise, add the current user as an additional signer<br/> . S X=""""_"`"_TIUDA_"""",(DIC,DLAYGO)=8925.7,DIC(0)="LX" D ^DIC Q:+Y'>0<br/> . S DIE=DIC,TIUY=$G(TIUY)_$S($G(TIUY)]"":U,1:"")_+TIULIST(TIUI)<br/> . S DR=".02////"_0_";.03////"_+$G(TIULIST(TIUI))<br/> . D ^DIE<br/> . D SEND^TIUALRT(TIUDA)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}