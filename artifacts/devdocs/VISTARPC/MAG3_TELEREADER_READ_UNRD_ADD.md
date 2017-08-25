---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 TELEREADER READ UNRD ADD<br/>
# MAG3 TELEREADER READ UNRD ADD

Add a consult and image pointers toUnread/Read List file (#2006.5849)and DICOM GMRC TEMP LIST file (#2006.5839)

## Properties

Property | Value
--- | ---
Label | FILE
MUMPS Implementation | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDA | LITERAL |  |  | An image IEN in IMAGE file (#2005) - ^MAG(2005,MAGDA)
MAGCNT | LITERAL |  | true | Count of new images captured
MAGRIEN | LITERAL |  | true | a request/consult IEN in REQUEST/CONSULTATION file (#123)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}