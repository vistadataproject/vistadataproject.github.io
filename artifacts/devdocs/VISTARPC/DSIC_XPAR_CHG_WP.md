---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPAR CHG WP<br/>
# DSIC XPAR CHG WP

This will change an instance of a System Parameter that is of the Word Processing type.

## Properties

Property | Value
--- | ---
Label | CHGWP
MUMPS Implementation | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3  p1 :&#x3D; optional - entity - if not passed, set to &quot;SYS&quot; for                   current user.  p2 :&#x3D; required - parameter name  p3 :&#x3D; optional - instance (default is 1) RETURN PARAMETER DESCRIPTION: Returns &quot;1^&quot; on success        &quot;-1^Error Message&quot; on failure
ARRAY | LIST | 250 | true | This is an array of the text to be stored in the parameter. Format is: ARRAY(1)&#x3D;1st line of TextARRAY(2)&#x3D;2nd line of TextARRAY(n)&#x3D;nth line of Text ARRAY(n)&#x3D;&quot;&quot; to store blank lines for formatting, such as paragraph             separation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}