---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC XPAR MULT ACTION
# DSIC XPAR MULT ACTION

This is a multi-function front end to the Parameter APIs.  It allows you with a single RPC call to take edit type actions on several parameter/entity/instance combinations. You can only do these actions:  add, change, or delete Each entry in the passed list is treated as if it was a separate RPC call.  Thus each entry is totally independent of the others.  So you can mix and match parameters, entities, instances, and actions.

Property | Value
--- | ---
Label | MULT
Routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSICLIST | LIST | 250 | true | DSICLIST - required - p1^p2^p3^p4^p5^p6^p7  where For p1 - p6 see the equivalent DSIC XPAR xxxxxx RPC definition to see which p1 - p6 are required for the action requested   p1 :&#x3D; entity - default to USR  p2 :&#x3D; parameter name  p3 :&#x3D; instance  p4 :&#x3D; value  p5 :&#x3D; new instance value  p6 :&#x3D; format for GET1 call  p7 :&#x3D; action to be taken - must be ADD, CHG, or DEL        if p7 &#x3D; &quot;ADD&quot; then for this list element perform ADD function        if p7 &#x3D; &quot;CHG&quot; then for this list element perform change value                 for a parameter/entity/instance        if p7 &#x3D; &quot;DEL&quot; then for this list element perform delete of                of a parameter/entity/instance



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}