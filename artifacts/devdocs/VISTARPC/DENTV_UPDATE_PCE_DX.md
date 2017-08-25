---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV UPDATE PCE DX<br/>
# DENTV UPDATE PCE DX

Updates the PCE Visit to set the Primary Diagnosis and/or Primary Provider if they are no longer defined because of deleting procedures.

## Properties

Property | Value
--- | ---
Label | UDX
MUMPS Implementation | [DENTVTPF](http://code.osehra.org/dox/Routine_DENTVTPF_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 256 | true | Contains a list with the PCE Visit and Primary Dx and/or Provider defined:DATA(1)&#x3D;visit ien^visit dateDATA(n)&#x3D;1^&quot;POV&quot;^dx ien^dx external^^descDATA(n)&#x3D;1^&quot;PRV&quot;^provider ien(file 200)^provider name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}