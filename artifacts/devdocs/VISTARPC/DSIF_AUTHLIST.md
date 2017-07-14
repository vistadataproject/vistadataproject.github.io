---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF AUTHLIST<br/>
# DSIF AUTHLIST

Pass in IEN (DFN), return list of current authorizations or -1^Not a valid patient or -1^Not a valid patient

## Properties

Property | Value
--- | ---
Label | AUTHLIST
Routine | [DSIFENA2](http://code.osehra.org/dox/Routine_DSIFENA2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Pass in Patient File IEN (file #2) 
FLAG | LITERAL | 1 | true |     FLAG&#x3D;&quot;&quot; OR &quot;0&quot; Outpatient authorizations only (excludes Unauthorized)    FLAG&#x3D;&quot;1&quot; Inpatient auths onlY    FLAG&#x3D;&quot;2&quot; Both Outpt, Inpt. &amp; Unauthorized
DSIFDAT | LITERAL | 7 | true |   Enter the to date (in FM format) to restrict the number of records  returned.    Example: If you enter 3100501 the RPC will return all authorizations up  to May 1, 2010.    This field can also be used in conjunction with DSIFFDAT to produce a  specific time period in which authorizations to be returned.
DSIFFDAT | LITERAL | 7 | true |  Enter a from date (in FM format) to limit the authorizations returned.    Example: If you enter 3090101 it will only return authorizations between  today and January 1, 2009.
DSIF AUTHLIST |  |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}