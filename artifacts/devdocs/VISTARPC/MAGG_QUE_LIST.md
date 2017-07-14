---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG QUE LIST<br/>
# MAGG QUE LIST

Queues a list of images to be copied from jukebox to harddrive. 

## Properties

Property | Value
--- | ---
Label | QUELIST
Routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 5 | true |   A Code containing A | F | B     if [ A  then Abstracts will be queued.     if [ F  then Full Resolution image will be queued.     if [ B  then BIG file ( Xray 2k x 2k ) will be queued.
LIST | LIST |  | true | The list of Image IEN&#x27;s to be queued.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}