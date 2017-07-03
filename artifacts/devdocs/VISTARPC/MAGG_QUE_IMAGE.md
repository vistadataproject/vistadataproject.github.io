---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG QUE IMAGE
# MAGG QUE IMAGE

Queues images to be copied from JukeBox to harddrive. (to the Image Write Directory)

Property | Value
--- | ---
Label | QUEIMAGE
Routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 5 | true | A Code containing A | F | B    if [ A  then Abstracts will be queued.   if [ F  then Full Resolution image will be queued   if [ B  then BIG file ( Xray 2k x 2k ) will be queued
MAGIEN | LITERAL | 20 | true | This is the IEN from Image File ^MAG(2005  to be queued.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}