---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPD LAST INSTALL<br/>
# DSIC XPD LAST INSTALL

This returns the latest installed version of a KIDS build.  It gets the data from the INSTALL file.

## Properties

Property | Value
--- | ---
Label | RLAST
MUMPS Implementation | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PKG | LITERAL | 50 | true | This is the name (.01 field value) from the INSTALL file. The VA naming convention for KIDS builds:  &lt;name&gt;&lt;space&gt;&lt;version&gt; for a whole package  name*version*patch for a patch PKG can be the full name KIDS BUILD file name, or it can just be the name portion of the KIDS BUILD file name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}