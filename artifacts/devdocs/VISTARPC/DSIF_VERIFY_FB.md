---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF VERIFY FB<br/>
# DSIF VERIFY FB

Used ot verify a Fee Basis patient is eligible.Pass in DFN, Output1 OR {0 = not verified} OR {-1 - error}^DishonorableDischarge^Agent orange only 1st piece codes: '1' VERIFIED PROCEED                 '0' NOT VERIFED                 '-1' ERROR^MESSAGE

## Properties

Property | Value
--- | ---
Label | VER
MUMPS Implementation | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 50 | true | Pass in IEN of the Patient File (DFN)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}