---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG IMAGE UNLOCK<br/>
# MAGG IMAGE UNLOCK

This remote procedure unlocks one or more images.

## Properties

Property | Value
--- | ---
Label | UNLOCKIM
Routine | [MAGGA04](http://code.osehra.org/dox/Routine_MAGGA04_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAGS | LITERAL |  |  | reserved
IMGLST | LIST |  | true | List of images that have to be unlocked. Images are referenced by their internal entry numbers (IENs) in the IMAGE (#2005) and IMAGE AUDIT(#2005.1) files. Example:   with RPCBroker.Param[1] do    begin      PType :&#x3D; list;      Mult[1] :&#x3D; &#x27;234&#x27;;      Mult[2] :&#x3D; &#x27;789&#x27;;    end;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}