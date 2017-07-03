---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQPT PROVIDERS
# ORQPT PROVIDERS

Function returns an array of providers.

Property | Value
--- | ---
Label | PROV
Routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [PROV^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF PROVIDERS
Code | {::nomarkdown}<pre><code> N I,IEN,NAME,TDATE<br/> S I=1,NAME=""<br/> F  S NAME=$O(^VA(200,"B",NAME)) Q:NAME=""  S IEN=0,IEN=$O(^(NAME,IEN))  D<br/> .Q:$E(NAME)="*"<br/> .I $D(^XUSEC("PROVIDER",IEN)),$$ACTIVE^XUSER(IEN) S Y(I)=IEN_"^"_NAME,I=I+1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}