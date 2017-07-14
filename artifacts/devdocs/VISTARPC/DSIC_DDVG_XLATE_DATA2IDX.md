---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DDVG XLATE DATA2IDX<br/>
# DSIC DDVG XLATE DATA2IDX

Will take an external value and perform a FILEMAN lookup.  Restrictions are:1.  The external value must be resolvable to a unique entry.2.  There must be an index on the field that contains the value.

## Properties

Property | Value
--- | ---
Label | XLATE2
Routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the file (or subfile) number upon which the lookup will be done
IENS | LITERAL | 50 | true | This is the standard IENS parameter when FIND1^DIC is invoked.  It is only needed if the lookup is on a multiple instead of the parent file.
VALUE | LITERAL | 250 | true | This is the value in external format used for the lookup.lookup.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}