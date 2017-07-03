---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDFH TFPROD
# ORWDFH TFPROD

Returns a list of active tubefeeding products.

Property | Value
--- | ---
Label | TFPROD
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TFPROD^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return a list of active tubefeeding products
Code | {::nomarkdown}<pre><code> N I,IEN,NAM,X,CURTM<br/> S I=0,NAM="",CURTM=$$NOW^XLFDT<br/> F  S NAM=$O(^ORD(101.43,"S.TF",NAM)) Q:NAM=""  D<br/> . S IEN=0 F  S IEN=$O(^ORD(101.43,"S.TF",NAM,IEN)) Q:'IEN  D<br/> . . S X=^ORD(101.43,"S.TF",NAM,IEN)<br/> . . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br/> . . S I=I+1<br/> . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)<br/> . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}