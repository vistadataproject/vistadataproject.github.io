---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDRA32 IMTYPSEL<br/>
# ORWDRA32 IMTYPSEL



## Properties

Property | Value
--- | ---
Label | IMTYPSEL
MUMPS Implementation | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [IMTYPSEL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | return list of active imaging types
Input Parameters | DUMMY
Code | {::nomarkdown}<pre><code> N ORX,I,IEN,DGRP,MNEM,NAME<br/> S ORX=""<br/> F I=1:1  S ORX=$O(^RA(79.2,"C",ORX)) Q:ORX=""  D<br/> . I '$D(^ORD(101.43,"S."_ORX)) Q<br/> . S IEN=$O(^RA(79.2,"C",ORX,0))<br/> . S NAME=$P(^RA(79.2,IEN,0),U,1)<br/> . S MNEM=$P(^RA(79.2,IEN,0),U,3)<br/> . S DGRP=$O(^ORD(100.98,"B",MNEM,0))<br/> . S Y(I)=IEN_U_NAME_U_MNEM_U_DGRP</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}