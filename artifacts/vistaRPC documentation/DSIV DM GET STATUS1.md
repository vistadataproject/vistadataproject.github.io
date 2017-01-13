---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV DM GET STATUS1 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DM GET STATUS1{:/}
 tag | {::nomarkdown}STAT{:/}
 routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will retrieve the statuses of the VistA Imaging import requests on a per DSS application basis.  There are various input filters you can pass to limit what will be returned.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVDAT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Note: TX equals transaction ID (19621 .01 field value)  DSIVDAT(sub) - subscript value of DSIVDAT() is arbitrary DSIVDAT(sub) = label^value  where   Label   Req  Value   ------  ---  ---------------------------------------------------------    DEL          Boolean - default 0 - if 1 then delete records which were                 successfully imported and retrieved by this call    APP      x   Only return TXs for this APP CODE    SDT          get TXs >= this date, can be FM or external date format     EDT          get TXs <= this date, can be FM or external date format    MAX          Maximum number of transactions to retrieve    TRANID       TX    OVERRIDE     This RPC is hardcoded to get as many statuses as possible                 meeting the input filters in one minute.  This timer                function can be overridden by this Boolean input param                   I $G(OVERRIDE) then do not honor timer    WHICH        flag indicating which transactions to retrieve                If TRANID is passed, ignore value of WHICH                If WHICH[A - get all TX statuses - default                         E - get all TX in error state                         S - get all successfully imported TX                         P - get all TXs still pending import                         * - get TXs whether or not the TX was previously                              retrieved. Default is get only those TXs not                             previously retrieved{:/} | 




 Generated on January 13th 2017, 6:55:29 am