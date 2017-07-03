---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV FM FILER
# DSIV FM FILER

This invokes the Fileman filer to update records for an existing entry.This will allow you to update any field at the level of the FILE includingword processing fields.  It does not allow for updating different levelsof the file.  If you wish to update a subfile, then you will have to makemultiple calls to this RPC for each file or subfile.

Property | Value
--- | ---
Label | FILE
Routine | [DSIVFM04](http://code.osehra.org/dox/Routine_DSIVFM04_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the file (or subfile) number for record which you wish to update
IENS | LITERAL | 50 | true | This is the standard Fileman IENS for calling the Fileman DBS APIs.  Theformat of iens is as follows (must have trailing commas):   record#, - to update a record at the top level of a file    sub1,ifn1, - to update multiple record sub1 in the file for record ifn1   sub2,sub1,ifn1 - update a multiple within a multiple within a file
FLAG | LITERAL | 1 | true | This parameter is optional.  If passed it must be equal to &quot;T&quot;FLAG&#x3D;&quot;T&quot; indicates that you wish transaction processing to occur.  Thatis, all of the fields must successfully be updated or none of them areupdated.  Without this flag, Fileman will update those fields that he can.
INPUT | LIST | 250 | true |  This list contains the fields to be updated in the file (or subfile). The format of INPUT(x) &#x3D; p1^p2^p3  where     x - the subscript of INPUT can be anything, numeric, string    p1 - required - this is the field number at the level in the file    p2 - optional - default value is &quot;I&quot; - this flag indicates the type        value being passed in, internal format, external format, word        processing          p2 &#x3D; I - value is in Fileman internal format          p2 &#x3D; E - value is on external format          p2 &#x3D; W or WA - this field is a word processing field               see notes below for additional details for this    p3 - required - this is the value to be entered for this field#  Notes on word process fields ----------------------------   if INPUT(x) &#x3D; field#^W^@ then delete any existing text for this record   if INPUT(x) &#x3D; field#^W^text then this will first remove any existing                 text that may exist.  It will then add the new text   if INPUT(x) &#x3D; field#^WA^text then this will not delete the existing                 text but will append the new text to the existing text if                 there is any    For the same field# all lines of the array must have the same value for   the second piece.  That is, all must be W or WA.  You cannot have some   as W and some as WA.  Each field# can have its own type.  Field 1 could   be W and field 2 could be WA.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}