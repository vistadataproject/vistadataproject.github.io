---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORRDI FAIL THRESH<br/>
# ORRDI FAIL THRESH

This parameter is a threshold value that holds the minimum number of HDR read failures for RDI before RDI will go into a state of &quot;OUTAGE&quot;  What this means is that when an OUTAGE state is encountered, RDI will no longer perform real time HDR read attempts but will instead display to the user the &quot;Local Data Only&quot; message.

## Properties

Property | Value
--- | ---
Summary | Threshold for HDR read failures
Value Type | numeric
Value Domain | 
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}