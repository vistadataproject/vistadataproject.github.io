---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGGPATPROC
# MAGGPATPROC

Return a List of All Patient Procedures in subspeciality.For use when capturing Images and linking to a Medicine Procedure.

Property | Value
--- | ---
Label | PRC
Routine | [MAGGTMC](http://code.osehra.org/dox/Routine_MAGGTMC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGGZY | LITERAL | 245 | true | Input is &#x27;^&#x27; delimited string of info.Medicine SubSpecialty ^ Patient  ^ To Date ^ From DateIEN(^MCAR(697.2)  ^ DFN ^ TO DATE ^(FROM DATE def to TODAY) i.e.     &quot;43^643^07/03/95&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}