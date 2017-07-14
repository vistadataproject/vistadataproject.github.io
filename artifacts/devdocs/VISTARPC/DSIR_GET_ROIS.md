---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET ROIS<br/>
# DSIR GET ROIS

This RPC is used to return an array of ROI INSTANCE (File 19620) entries. GETLIST(AXY,TYPE,STAT,IEN)      ;RPC - DSIR GET ROISInput: TYPE: Set of Codes:     "P"  : Get list by patient     "C"  : Get list by clerk     "O"  : Get all open or pending requests.            Defaults to all requests for a given status     "R"  : Get list by requestor    STAT: Set of Codes: (Delimited by '^', defaults to *)     "*"  : Get all requests of a given type     "O"  : Get only the open requests of this type     "C"  : "          " closed "                " (-D,-G,-P)     "P"  : "          " pending "               "     "N"  : "          " other non-disclosure "  "                       (-NR,-RF,-ND,-NV,-RC,-NF,-NU)     "E"  : "          " entered in error "      "     "X"  : "          " cancelled "             "     "A"  : "          " appealed "              " (-RV,-PR)  ID: IFN of patient, requestor or clerk.     If not for requestor or clerk IEN should be one of the following formats           nnnn;DPT( - VA Patient file entry           nnnn;DSIR(19620.96, - DSIR NON-COMPUTERIZED RECORDS PATIENT           1;DSIR(19620.95, - True FOIA requests        Return: Global Array IEN^Patient Name^External Date Entered^Status^Requestor^SSN^Priority^FMDT    ^Exemptions^Expedite Reqstd^Expedite Granted^Clerk Name    ^Opened by Clerk Name^Internal Opened Date^External Open Date    ^Last Closed Clerk^Internal Last Closed Date^External Last Closed Date    ^Last Reopen Clerk^Internal Last Reopen Date^External Last Reopen Date

## Properties

Property | Value
--- | ---
Label | GETLIST
Routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE OF LIST | LITERAL | 1 | true | &quot;P&quot;  : Get list by patient&quot;C&quot;  : Get list by clerk&quot;O&quot;  : Get all open or pending requests. Defaults to all requests for a given status
STATUS | LITERAL | 8 | true | &quot;A&quot;  : Get only the appealed requests of this type&quot;O&quot;  : Get only the open requests of this type&quot;C&quot;  : &quot;          &quot; closed &quot;                &quot;&quot;P&quot;  : &quot;          &quot; pending &quot;               &quot;&quot;N&quot;  : &quot;          &quot; Other Nondisclosures    &quot;&quot;E&quot;  : &quot;          &quot; entered in error &quot;      &quot;&quot;X&quot;  : &quot;          &quot; cancelled &quot;             &quot;&quot;*&quot;  : Get all types
PATIENT/CLERK ID | LITERAL | 99 | true | DFN of patient or IEN of clerk.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}