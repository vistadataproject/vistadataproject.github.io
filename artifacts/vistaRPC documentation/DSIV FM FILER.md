---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV FM FILER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV FM FILER{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [DSIVFM04](http://code.osehra.org/dox/Routine_DSIVFM04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This invokes the Fileman filer to update records for an existing entry.This will allow you to update any field at the level of the FILE includingword processing fields.  It does not allow for updating different levelsof the file.  If you wish to update a subfile, then you will have to makemultiple calls to this RPC for each file or subfile.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file (or subfile) number for record which you wish to update{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the standard Fileman IENS for calling the Fileman DBS APIs.  Theformat of iens is as follows (must have trailing commas):   record#, - to update a record at the top level of a file    sub1,ifn1, - to update multiple record sub1 in the file for record ifn1   sub2,sub1,ifn1 - update a multiple within a multiple within a file{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is optional.  If passed it must be equal to \T\FLAG=\T\ indicates that you wish transaction processing to occur.  Thatis, all of the fields must successfully be updated or none of them areupdated.  Without this flag, Fileman will update those fields that he can.{:/} | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This list contains the fields to be updated in the file (or subfile). The format of INPUT(x) = p1^p2^p3  where     x - the subscript of INPUT can be anything, numeric, string    p1 - required - this is the field number at the level in the file    p2 - optional - default value is \I\ - this flag indicates the type        value being passed in, internal format, external format, word        processing          p2 = I - value is in Fileman internal format          p2 = E - value is on external format          p2 = W or WA - this field is a word processing field               see notes below for additional details for this    p3 - required - this is the value to be entered for this field#  Notes on word process fields ----------------------------   if INPUT(x) = field#^W^@ then delete any existing text for this record   if INPUT(x) = field#^W^text then this will first remove any existing                 text that may exist.  It will then add the new text   if INPUT(x) = field#^WA^text then this will not delete the existing                 text but will append the new text to the existing text if                 there is any    For the same field# all lines of the array must have the same value for   the second piece.  That is, all must be W or WA.  You cannot have some   as W and some as WA.  Each field# can have its own type.  Field 1 could   be W and field 2 could be WA.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:06 am</p>{:/}