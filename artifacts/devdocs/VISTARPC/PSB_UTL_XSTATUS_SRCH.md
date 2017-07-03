---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PSB UTL XSTATUS SRCH
# PSB UTL XSTATUS SRCH

RESULTS(0)=returned line countRESULTS(1)=patients location during activityRESULTS(2)=medication^ordernumberRESULTS(3)= action fileman date&timeRESULTS(4)= scheduled administration fileman date&time

Property | Value
--- | ---
Label | FNDACTV
Routine | [PSBVDLU3](http://code.osehra.org/dox/Routine_PSBVDLU3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULTS | REFERENCE |  | true | RESULTS array (ref)
PARAMS | LITERAL |  | true | ^ piece#1 - DFN (required)#2 - OrderNumber#3 - Action (status) to search for#4 - TimeFrame                          NOTE:  &#x3D;&quot;FREQ&quot;  This  Function will use order&#x27;s                                    frequency.        ;                    1. If the order is a PRN, On Call or One-Time        ;                       the look back a default of 72 hours.        ;                    2. if the order is a Continuous order key                                 off of the frequency as follows.        ;                          a.) if the frequency is &lt;24 hours                                       use the default of 72 hours.        ;                          b.) if the frequency is &gt;&#x3D; 24 hour,                                       look back 3.5 times the frequency        ;                 NOTE:  [&quot;X#&quot;   This Function will search back #                                     of admins.         ;  Example call: D FNDACTV^PSBVDLU3(.results,&quot;1234^1U^H^12&quot;)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}