---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ ISN<br/>
# MAGQ ISN

This is the mail message component of the "ImageGroupNotify" method.This report is sent to the MAG SERVER mail group in order to alertmembers of the occurance of image file size variance.  This is indicativeof a network and Clinical imaging event requiring action to correct theclinical database.

## Properties

Property | Value
--- | ---
Label | ISN
MUMPS Implementation | [MAGUSIT](http://code.osehra.org/dox/Routine_MAGUSIT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILENAME | LITERAL | 8 | true | This is the filename and extension which has file size variance.
Network source file size. | LITERAL | 1 | true | This is the bite integer which represents the size property.
Jukebox size | LITERAL | 1 | true | This is the Jukebox file size integer property.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}