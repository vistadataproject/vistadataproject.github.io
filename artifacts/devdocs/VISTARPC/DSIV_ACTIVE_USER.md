---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV ACTIVE USER<br/>
# DSIV ACTIVE USER

This will determine if a user (DUZ value) is valid and is active.  Also, additionally screening logic can be passed in to validate a user.

## Properties

Property | Value
--- | ---
Label | ACT
Routine | [DSIVDUZ](http://code.osehra.org/dox/Routine_DSIVDUZ_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XDUZ | LITERAL | 15 | true | This is a pointer value to the NEW PERSON file.
DSISCR | LIST | 250 | true | You may pass additional screening criteria to be checked.  For a user to be returned, all screening criteria must be true in addition to being Active.  Allowable formats of DSISCR(n) &#x3D; flag^val1^val2^val3^..   check for security key    KEY^security key name   check for parameter       PARM^ parameter name^parameter instance   execute M code     M^&lt;return message&gt;^&lt;executable M code which sets $T&gt;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}