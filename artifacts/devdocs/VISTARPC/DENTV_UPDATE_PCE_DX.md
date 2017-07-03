---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV UPDATE PCE DX
# DENTV UPDATE PCE DX

Updates the PCE Visit to set the Primary Diagnosis and/or Primary Provider if they are no longer defined because of deleting procedures.

Property | Value
--- | ---
Label | UDX
Routine | [DENTVTPF](http://code.osehra.org/dox/Routine_DENTVTPF_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 256 | true | Contains a list with the PCE Visit and Primary Dx and/or Provider defined:DATA(1)&#x3D;visit ien^visit dateDATA(n)&#x3D;1^&quot;POV&quot;^dx ien^dx external^^descDATA(n)&#x3D;1^&quot;PRV&quot;^provider ien(file 200)^provider name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}