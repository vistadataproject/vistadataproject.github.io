---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPAR ADD WP<br/>
# DSIC XPAR ADD WP

This RPC will allow the addition of a new Word-processing type system parameter.

## Properties

Property | Value
--- | ---
Label | ADDWP
MUMPS Implementation | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3  p1 :&#x3D; optional - entity - if not passed, defaults to SYS for current                             user.   p2 :&#x3D; required - parameter name  p3 :&#x3D; optional - instance (defaults to 1)
ARRAY | LIST | 250 | true | Array of text to add to the parameter where:   ARRAY(0) &#x3D; 1st line of text  ARRAY(1) &#x3D; 2nd line of text  ARRAY(n) &#x3D; nth line of text  ARRAY(n)&#x3D;&quot;&quot; to store blank lines of text, such as paragraph separation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}