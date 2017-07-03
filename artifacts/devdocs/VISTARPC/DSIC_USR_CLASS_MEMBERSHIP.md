---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC USR CLASS MEMBERSHIP
# DSIC USR CLASS MEMBERSHIP

For a given user and optional date, return class memberships for that user.

Property | Value
--- | ---
Label | USRCLASS
Routine | [DSICUSR](http://code.osehra.org/dox/Routine_DSICUSR_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 50 | true | INPUT(n) :&#x3D; label name ^ label value  where n&#x3D;0,1,2,3,... and    label name   label value    ----------   -------------------------------------------       USER      required &#x3D; DUZ [pointer to file 200]        DATE      optional - will accept multiple formats:                  if not passed, then default to TODAY                  if &lt;null&gt;, then default to TODAY                  if &quot;T&quot;, then default to TODAY                  it can be any Fileman date                  if &quot;*&quot;, then return all class memberships whether or                     not if they are currently active If a date is passed (or if the input value is converted to TODAY&#x27;s date), then only return those class memberships that were active as of that date



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}