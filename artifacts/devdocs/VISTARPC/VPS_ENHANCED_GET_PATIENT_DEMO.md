---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS ENHANCED GET PATIENT DEMO<br/>
# VPS ENHANCED GET PATIENT DEMO

This RPC is called  by the Vetlink Kiosk (point of service) system.  Given Patient SSN or DFN or ICN or VIC/CAC, this RPC returns thepatient demographics,insurance,and up-coming appointments, etcfor selected categories

## Properties

Property | Value
--- | ---
Label | GETDATA3
MUMPS Implementation | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSNUM | LITERAL | 25 | true | Patient ID such as the patient SSN OR DFN OR ICN OR VIC/CAC
VPSTYP | LITERAL | 7 | true | Patient ID TYPE such as SSN or DFN OR ICN OR VIC/CAC
VPSCAT | LIST | 20 | true | Input Format:  VPSCAT(SEQ#)&#x3D;CATEGORY;FROMDATE:THROUGH DATEExample input parameter :    VPSCAT(1)&#x3D;1;3140101:3141231 &lt;- returns Appointments start from 1/1/2014 through 12/31/2014   VPSCAT(2)&#x3D;2;3140601:3140630 &lt;- returns Lab Orders start from 6/1/2014 through 6/30/2014   VPSCAT(3)&#x3D;3                 &lt;- returns all consults   VPSCAT(4)&#x3D;6                 &lt;- returns Patient Demographics Valid Categories:   1 - Appointment (With Date Range option)   2 - Lab Orders (With Date Range option)   3 - Consults   4 - Radiology (With Date Range option)   5 - Problem   6 - Patient demographics



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}