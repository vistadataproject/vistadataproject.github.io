---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGPATPROC<br/>
# MAGGPATPROC

Return a List of All Patient Procedures in subspeciality.For use when capturing Images and linking to a Medicine Procedure.

## Properties

Property | Value
--- | ---
Label | PRC
MUMPS Implementation | [MAGGTMC](http://code.osehra.org/dox/Routine_MAGGTMC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGGZY | LITERAL | 245 | true | Input is &#x27;^&#x27; delimited string of info.Medicine SubSpecialty ^ Patient  ^ To Date ^ From DateIEN(^MCAR(697.2)  ^ DFN ^ TO DATE ^(FROM DATE def to TODAY) i.e.     &quot;43^643^07/03/95&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}