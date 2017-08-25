---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH CURRENT MEALS<br/>
# ORWDFH CURRENT MEALS



## Properties

Property | Value
--- | ---
Label | CURMEALS
MUMPS Implementation | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CURMEALS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return current list of recurring meals for AO and TF orders
Input Parameters | ORDFN, ORMEAL
Code | {::nomarkdown}<pre><code> N I,Y,X S I=0<br/> S ORMEAL=$G(ORMEAL,"")<br/> D EN2^FHWOR8(ORDFN,ORMEAL,.ORY)<br/> F  S I=$O(ORY(I)) Q:'I  D<br/> . S X=$P(ORY(I),U,2)<br/> . S Y=$P(ORY(I),U,1) D DD^%DT S $P(ORY(I),U,2)=Y<br/> . S $P(ORY(I),U,3)=$S(X="B":"Breakfast",X="N":"Noon",X="E":"Evening",1:"")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}