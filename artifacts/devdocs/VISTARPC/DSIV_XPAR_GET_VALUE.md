---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV XPAR GET VALUE<br/>
# DSIV XPAR GET VALUE

This will return the value of a single entity/param/instance.

## Properties

Property | Value
--- | ---
Label | GET1
Routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~~~p6  p1 :&#x3D; optional - entity - if not passed, set to &quot;USR&quot; for                   current user  p2 :&#x3D; required - parameter name  p3 :&#x3D; optional - instance  p6 :&#x3D; optional - format code determines return values        Q - internal value - [default]        E - external value        B - internal^external values



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}