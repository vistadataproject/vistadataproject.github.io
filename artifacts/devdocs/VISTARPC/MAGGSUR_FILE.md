---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGSUR FILE<br/>
# MAGGSUR FILE

Files the pointers in the Surgery and Image packages.

## Properties

Property | Value
--- | ---
Label | FILE
MUMPS Implementation | [MAGGTSR1](http://code.osehra.org/dox/Routine_MAGGTSR1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Image file internal number.  ^MAG(2005,
DATA | LITERAL | 245 | true | Sting of &#x27;^&#x27; delimited pieces.it is the same data that is set into the list ofsurgery cases when image application asks for list of patients cases.        ; for Imaging Versions &lt; 2.5 the data is        ; #     DATE             DESC      SRF(IEN   FM DATE        ;CNT_U_(READABLE DATE)_U_SROPS(1)_U_SROP_U_SRSDATE        ;        ; for Imaging Versions &gt; 2.4, the data is different        ;CNT_U_(READABLE DATE)_U_SROPS(1)_U_IMAGECT_U_&quot;|&quot;_SROP_U_SRSDATE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}