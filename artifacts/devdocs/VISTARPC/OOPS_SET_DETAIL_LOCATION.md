---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SET DETAIL LOCATION<br/>
# OOPS SET DETAIL LOCATION

This broker call files sub record level data in the Detail Location sub recordin the ASISTS SETTING OF INJURY File (#2261.4).

## Properties

Property | Value
--- | ---
Label | SETDLOC
MUMPS Implementation | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARM1 | LITERAL | 30 | true | 
DATA | LIST | 40 | true | This parameter contains a list of detail locations for a specificlocation and station (from the Site Parameter file).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}