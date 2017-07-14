---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC TIU LIST SPECIAL DOCS<br/>
# DSIC TIU LIST SPECIAL DOCS

There are certain TIU documents which are in special classes.  These documents are linked to other VistA files.  The TIU Document file has a Fileman Variable Pointer linking that document to the owning file.  Surgical Notes and Clinical Procedure notes are of this type.  This RPC will return a list of TIU notes assoicated with a specific variable pointer.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [DSICTIU1](http://code.osehra.org/dox/Routine_DSICTIU1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSICVP | LITERAL | 30 | true | This is a Fileman Variable Pointer value to be used for looking up documents associated with it.  This parameter is optional.  However, if this parameter is not passed, then then REC parameter will be required.
SEQ | LITERAL | 1 | true | This optional single character flag indicates the date order for the list of documents to return.  D - return list in descending order, i.e., newest note first  A - return list in ascending order, i.e., oldest note first
REC | LITERAL | 20 | true | This parameter is optional.  However, if the DSICVP parameter is not passed, then this parameter must be passed.  This parameter allows the GUI to get a list of documents without having to pass the explicit Fileman Variable Pointer syntax.  The format of REC is code^ien. The following are the only allowed codes:  S - get documents associated with surgery case # from file 130 Example:  S^234 - get all TIU notes associated with surgical case# 234



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}