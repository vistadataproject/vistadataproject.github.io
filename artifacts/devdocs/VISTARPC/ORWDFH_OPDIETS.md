---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDFH OPDIETS
# ORWDFH OPDIETS



Property | Value
--- | ---
Label | OPDIETS
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [OPDIETS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return a list of up to 5 outpatient diets from file 119.9
Input Parameters | FROM, DIR
Code | {::nomarkdown}<pre><code> N X,I,J,IEN,CURTM,SYNCNT,SYNTOT,FHDIET<br/> D DIETLST^FHOMAPI<br/> S CURTM=$$NOW^XLFDT,I=0,SYNTOT=1<br/> F  S I=$O(FHDIET(I)) Q:'I  D<br/> . S IEN=$O(^ORD(101.43,"ID",$P(FHDIET(I),U,1)_";99FHD",0)) Q:+IEN=0<br/> . S X=^ORD(101.43,"S.DIET",$P(FHDIET(I),U,2),IEN)<br/> . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br/> . I $P($G(^ORD(101.43,IEN,"FH")),U)'="D",($P($G(^(0)),U)'="NPO") Q<br/> . S X=$P(^ORD(101.43,IEN,0),U,1)<br/> . S SYNCNT=$P($G(^ORD(101.43,IEN,2,0)),U,4),J=0<br/> . S ORY(X)=IEN_U_X_U_X<br/> . I +SYNCNT  D  Q<br/> . . S SYNTOT=SYNTOT+SYNCNT<br/> . . F  S J=$O(^ORD(101.43,IEN,2,J)) Q:'J  D<br/> . . . S ORY(^ORD(101.43,IEN,2,J,0))=IEN_U_^ORD(101.43,IEN,2,J,0)_$C(9)_"<"_X_">"_U_X</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}