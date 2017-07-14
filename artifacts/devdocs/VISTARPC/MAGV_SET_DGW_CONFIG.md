---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV SET DGW CONFIG<br/>
# MAGV SET DGW CONFIG

Set DGW configuration settings in the MAGV GATEWAY CONFIGURATIONFile (#2006.9191).

## Properties

Property | Value
--- | ---
Label | SETGWCFG
Routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL | 30 |  | NAME OF DICOM GATEWAY
MAILGROUP | LITERAL |  |  | EMAIL ADDRESSEE
POSTOFFICE | LITERAL | 30 |  | POST OFFICE SERVER
POSTPORT | LITERAL | 5 |  | POST OFFICE EMAIL PORT
IMPORTER | LITERAL | 3 |  | Indicator to determine if DGW is using the IMPORTER.Contents are YES or NO.
LOCATION | LITERAL | 8 |  | DICOM GATEWAY LOCATION CODE(Site Location/Station number)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}