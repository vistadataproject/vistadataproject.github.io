---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV DM GET STATUS1
# DSIV DM GET STATUS1

This will retrieve the statuses of the VistA Imaging import requests on a per DSS application basis.  There are various input filters you can pass to limit what will be returned.

Property | Value
--- | ---
Label | STAT
Routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVDAT | LIST | 245 | true | Note: TX equals transaction ID (19621 .01 field value)  DSIVDAT(sub) - subscript value of DSIVDAT() is arbitrary DSIVDAT(sub) &#x3D; label^value  where   Label   Req  Value   ------  ---  ---------------------------------------------------------    DEL          Boolean - default 0 - if 1 then delete records which were                 successfully imported and retrieved by this call    APP      x   Only return TXs for this APP CODE    SDT          get TXs &gt;&#x3D; this date, can be FM or external date format     EDT          get TXs &lt;&#x3D; this date, can be FM or external date format    MAX          Maximum number of transactions to retrieve    TRANID       TX    OVERRIDE     This RPC is hardcoded to get as many statuses as possible                 meeting the input filters in one minute.  This timer                function can be overridden by this Boolean input param                   I $G(OVERRIDE) then do not honor timer    WHICH        flag indicating which transactions to retrieve                If TRANID is passed, ignore value of WHICH                If WHICH[A - get all TX statuses - default                         E - get all TX in error state                         S - get all successfully imported TX                         P - get all TXs still pending import                         * - get TXs whether or not the TX was previously                              retrieved. Default is get only those TXs not                             previously retrieved



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}