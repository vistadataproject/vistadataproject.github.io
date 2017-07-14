---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; QACI LOAD ROC<br/>
# QACI LOAD ROC

This RPC assumes that the user has previously run the option QACI MIGRATION DATA BUILD to build the list of data to be migrated. You will call this RPC multiple times in a loop. You can tell when all of the ROCs have been processed when the output list comes back empty. So you would do the following in the Java calling code:1) Call the RPC using VistALink. (On the first call, the input array willbe empty).2) Check the output list from the RPC. If empty, you're done.3) Otherwise, pass the list returned by the RPC to the Oracle procedure toupdate the ROCs.4) Move the output from the Oracle procedure into the array that will be used as input to the next RPC call, then return to step 1. Each entry in the output list from this RPC contains up-arrow delimitedstrings of ROC data. The data tells the procedure both what ROC number it belongs to, and the type of data. The data for the main table comes first,followed by the issue text entries, the resolution text entries, and themethod-of-contact entries.

## Properties

Property | Value
--- | ---
Label | EN
Routine | [QACI4](http://code.osehra.org/dox/Routine_QACI4_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATSLIST | LIST |  | true | If defined, contains a list of ROC numbers for the previous group of ROCsthat was migrated from VistA to the Oracle table. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}