---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS FEE CONSULTS<br/>
# DSIF CNSLTS FEE CONSULTS

Returns a list of consults for the specified service in block of 50 consults at a time. Last item in the list is $$END$$ when last consult for service returned.

## Properties

Property | Value
--- | ---
Label | FEECNSLT
Routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFSVC | LITERAL |  | true | IEN for the REQUEST SERVICES (#123.5) file.
DSIFLDT | LITERAL | 15 | true | Date for the last consult returned in a previous call to this RPC. Ifpassed, must be in INTERNAL format, and the RPC will return the next 50consults prior to this date (reverse chronological order). If not passed,the RPC will return the next 50 consults before this date (reverse chronological order).
DSIFLIEN | LITERAL | 15 |  | The IEN to the last consult returned by a previous call to this RPC. Ifpassed, must be passed with the LAST DATE parameter, and the RPC willreturn the next 50 consults beginning with the consult listed prior to this one (returns in reverse chronological order). If not passed,the RPC will return the first 50 consults in the list in reverse chronological order.
DSIFSCR | LITERAL | 1 | true | If passed, determines which form of screening should be used to determinewhether the user can view the selected service. If not passed (or passedas &quot;&quot;), no screening will be performed. Allowed values are:   N - Consult Notification screen   U - Consult Parameter screening by user precedence
DSIFSTAT | LITERAL |  | true | This input should be the status of the Consults you wish to be returned. Currently, the only supported statuses are: Active and Pending.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}