---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQPT WARDS
# ORQPT WARDS

Function returns a list of wards.

Property | Value
--- | ---
Label | WARD
Routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [WARD^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF ACTIVE WARDS
Code | {::nomarkdown}<pre><code> N I,IEN,NAME,D0<br/> S I=1,NAME=""<br/> F  S NAME=$O(^DIC(42,"B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D<br/> . S D0=IEN D WIN^DGPMDDCF<br/> . I X=0 S Y(I)=IEN_"^"_NAME,I=I+1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}