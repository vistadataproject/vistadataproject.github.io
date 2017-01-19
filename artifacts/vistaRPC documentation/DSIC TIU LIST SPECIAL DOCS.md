---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC TIU LIST SPECIAL DOCS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC TIU LIST SPECIAL DOCS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSICTIU1](http://code.osehra.org/dox/Routine_DSICTIU1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}There are certain TIU documents which are in special classes.  These documents are linked to other VistA files.  The TIU Document file has a Fileman Variable Pointer linking that document to the owning file.  Surgical Notes and Clinical Procedure notes are of this type.  This RPC will return a list of TIU notes assoicated with a specific variable pointer.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSICVP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Fileman Variable Pointer value to be used for looking up documents associated with it.  This parameter is optional.  However, if this parameter is not passed, then then REC parameter will be required.{:/} | 
| {::nomarkdown}SEQ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This optional single character flag indicates the date order for the list of documents to return.  D - return list in descending order, i.e., newest note first  A - return list in ascending order, i.e., oldest note first{:/} | 
| {::nomarkdown}REC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is optional.  However, if the DSICVP parameter is not passed, then this parameter must be passed.  This parameter allows the GUI to get a list of documents without having to pass the explicit Fileman Variable Pointer syntax.  The format of REC is code^ien. The following are the only allowed codes:  S - get documents associated with surgery case # from file 130 Example:  S^234 - get all TIU notes associated with surgical case# 234{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}