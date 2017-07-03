---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQPT SPECIALTIES
# ORQPT SPECIALTIES

Function returns an array of treating specialties.

Property | Value
--- | ---
Label | SPEC
Routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [SPEC^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF TREATING SPECIALTIES
Code | {::nomarkdown}<pre><code> N I,NAME,IEN<br/> S I=1,NAME=""<br/> F  S NAME=$O(^DIC(45.7,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN)) I $$ACTIVE^DGACT(45.7,IEN) S Y(I)=IEN_"^"_NAME,I=I+1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}