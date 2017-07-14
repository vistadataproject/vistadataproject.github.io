---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRPARM EN ENTER EDIT<br/>
# DSIRPARM EN ENTER EDIT

This RPC will enter/edit the entries in the DSIR FACILITY PARAMETERS File (#10620.701).

## Properties

Property | Value
--- | ---
Label | EN
Routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INST | LITERAL | 99 | true | This is the pointer to the INSTITUTION File (#4).
DATA | LIST | 99 | true | This is an array containing the data to be stored in the DSIR FACILITY PARAMTERS File (#19620.701) in the below format.        Field Number ^ Internal Data Value        *NOTE: Since this file is DINUM the data array does NOT need the .01 fieldpassed, it is the INST parameter. This parameter is optional, but if nothing is passed nothing will be updated and the return will be an unsuccessful result.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}