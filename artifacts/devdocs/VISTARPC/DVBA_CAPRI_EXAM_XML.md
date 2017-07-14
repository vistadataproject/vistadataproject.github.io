---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBA CAPRI EXAM XML<br/>
# DVBA CAPRI EXAM XML

This RPC allows for the filling of the 2507 EXAM template in the XML version.

## Properties

Property | Value
--- | ---
Label | FILEIN
Routine | [DVBAXML](http://code.osehra.org/dox/Routine_DVBAXML_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EXAMIEN | LITERAL | 30 | true | 2507 Exam IEN
DAS | LITERAL | 250 | true | DAS is the XML DAS Conformation message
DATTIM | LITERAL |  | true | DATTIM is the XML Transmission Date/Time
XML | LIST |  | true | XML is the array list format of the template being stored



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}