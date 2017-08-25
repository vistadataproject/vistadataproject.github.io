---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS PRINT PATIENT LABEL<br/>
# VPS PRINT PATIENT LABEL

This RPC prints patient label using the standard VistAPrint Patient Label routine (DGPLBL).

## Properties

Property | Value
--- | ---
Label | PRINT
MUMPS Implementation | [VPSRLBLS](http://code.osehra.org/dox/Routine_VPSRLBLS_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSLOC | LITERAL | 1 | true | This is a flag to indicate to print routine to include ward locationor not.
VPSLBCNT | LITERAL | 3 | true | This is label count to indicate to print routine how many duplicatelabels to print for the patient.
VPSLPL | LITERAL | 2 | true | This is Lines/Label to indicate to print routine the maximum lines to print for each label.
VPSIO | LITERAL | 50 | true | This is the device name where the label will be printed to.
VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Input parameter: DFN,SSN,ICN,VIC/CAC
VPSNUM | LITERAL | 50 | true | Patient ID. This could be SSN, DFN, VIC/CAC, ICN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}