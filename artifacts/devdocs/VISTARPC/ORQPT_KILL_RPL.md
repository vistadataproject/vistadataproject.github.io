---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT KILL RPL<br/>
# ORQPT KILL RPL

This RPC is passed a ^TMP file root and $J(job number) and kills the ^TMP("ORRPL",$J globaldata based on the passed file root w/job number.

## Properties

Property | Value
--- | ---
Label | RPLCLEAN
MUMPS Implementation | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [RPLCLEAN^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Method Comment | Kill global data using passed global root value.
Input Parameters | ORJ
First Comment | {::nomarkdown}<pre><code><br/> Variables used:<br/><br/>    ORJ    = Job number to use in ^TMP global root.<br/>    ORROOT = Root of ^TMP global to kill.<br/>    Y      = Returned RPC value.<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORROOT<br/> S Y=1                                     ; Initialize.<br/> S ORROOT="^TMP("_"""ORRPL"""_","          ; Initial setting.<br/> S ORROOT=ORROOT_ORJ_","_"""B"""_")"       ; Add rest.<br/> K @ORROOT                                 ; Kill global data.<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}