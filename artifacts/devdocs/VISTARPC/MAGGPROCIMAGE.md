---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGPROCIMAGE<br/>
# MAGGPROCIMAGE

Files image pointer in procedure file and procedure pointers in image file.

## Properties

Property | Value
--- | ---
Label | FILE
Routine | [MAGGTMC1](http://code.osehra.org/dox/Routine_MAGGTMC1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | DATA &#x3D; DATETIME^PSIEN^DFN^MCIEN A string of 4 pieces   DATETIME:  PROCEDURE DATE/TIME  REQPSIEN  : PROCEDURE INTERNAL NUMBER  ^MCAR(MCFILE,XDFN  :  PATIENT DFNMCIEN :  PROCEDURE FILE, INTERNAL NUMBER  ^MCAR(697.2,X
MAGARR | LIST |  | true | An array of images that are to be associated with the procedure.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}