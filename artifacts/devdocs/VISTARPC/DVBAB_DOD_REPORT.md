---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB DOD REPORT<br/>
# DVBAB DOD REPORT

This remote procedure call returns a DOD report from the FHIE framework.  The RPC is designed specifically for the FHIE VistA server not the local VAMC facilities.  It is distributed nationally with the CAPRI application to keep the remote procedures and the DVBA CAPRI GUI option consistent on all systems using CAPRI.  Please do not use. Input:  IEN       = Patient's DFN        DATATYPE  = Type of data being requested        BEGDATE   = Beginning search date        ENDDATE   = Ending search date        ORMAX     = Max number of entries for report 

## Properties

Property | Value
--- | ---
Label | SENDRPT
Routine | [DVBABDOD](http://code.osehra.org/dox/Routine_DVBABDOD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  |  | 
DATATYPE | LITERAL |  |  | 
BEGDATE | LITERAL |  |  | 
ENDDATE | LITERAL |  |  | 
ORMAX | LITERAL |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}