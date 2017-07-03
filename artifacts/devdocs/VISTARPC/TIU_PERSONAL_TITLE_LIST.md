---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU PERSONAL TITLE LIST
# TIU PERSONAL TITLE LIST

This Remote Procedure returns the user's list of preferred titles for agiven class of documents, along with the default title, if specified.

Property | Value
--- | ---
Label | PERSLIST
Routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ | LITERAL |  | true | This is the user&#x27;s ID number (Pointer to file 200).
CLASS | LITERAL |  |  | This is the Class of Documents (Pointer to file 8925.1) from which thetitle is to be selected.
INDEX | LITERAL |  | true | This is the array subscript from which to begin incrementing (in the eventthat the preferred list is to be appended to an existing array).



### MUMPS Method Description

Property | Value
--- | ---
Method | [PERSLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Method Comment | Get personal list for a user
Input Parameters | DUZ, CLASS, TIUC, TIUFLG
Code | {::nomarkdown}<pre><code> N TIUI,TIUDA,TIUDFLT,INLST<br/> S TIUDA=+$O(^TIU(8925.98,"AC",DUZ,CLASS,0))<br/> Q:+TIUDA'>0<br/> I +$G(TIUFLG) S TIUC=1,TIUY(TIUC)="~SHORT LIST"<br/> S TIUI=0,TIUC=+$G(TIUC)<br/> F  S TIUI=$O(^TIU(8925.98,TIUDA,10,TIUI)) Q:+TIUI'>0  D<br/> . N TIUPL,TIUTNM,TIUDTYP,TIUSEQ<br/> . S TIUPL=$G(^TIU(8925.98,TIUDA,10,TIUI,0))<br/> . S TIUDTYP=$P(TIUPL,U)<br/> . I $S(+$$CANENTR^TIULP(TIUDTYP)'>0:1,+$$CANPICK^TIULP(TIUDTYP)'>0:1,1:0) Q<br/> . S TIUTNM=$S($P(TIUPL,U,3)]"":$P(TIUPL,U,3),1:$$PNAME^TIULC1(+TIUDTYP))<br/> . S TIUSEQ=+$P(TIUPL,U,2),TIUC=+$G(TIUC)+1<br/> . S TIUSEQ=$S(+TIUSEQ:$S('$D(TIUY(TIUSEQ)):TIUSEQ,1:(TIUSEQ+1)),1:TIUC)<br/> . S TIUY(TIUSEQ)="i"_TIUDTYP_U_TIUTNM,TIUC=+TIUSEQ<br/> I +$G(TIUFLG) Q<br/> S TIUDFLT=$$PERSDOC^TIULE(DUZ,+CLASS)<br/> S (TIUI,TIUC)=0<br/> F  S TIUI=$O(TIUY(TIUI)) Q:+TIUI'>0  D<br/> . S TIUC=TIUI<br/> . I +TIUDFLT,($P($G(TIUY(TIUI)),U)=("i"_+TIUDFLT)) S $P(TIUDFLT,U,2)=$P(TIUY(TIUI),U,2),INLST=TIUI<br/> I +TIUDFLT D<br/> . ;if default isn't in list, append it as an item<br/> . I '$G(INLST) S TIUC=+$G(TIUC)+1,TIUY(TIUC)="i"_TIUDFLT<br/> . ;otherwise, just append as default<br/> . S TIUC=+$G(TIUC)+1,TIUY(TIUC)="d"_TIUDFLT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}