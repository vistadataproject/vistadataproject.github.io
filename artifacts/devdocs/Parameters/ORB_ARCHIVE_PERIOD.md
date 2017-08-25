---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORB ARCHIVE PERIOD<br/>
# ORB ARCHIVE PERIOD

The number of days to archive a notification for a site.  If notindicated, the default period of 30 days is used.  The maximum number ofdays is 100,000 or about 220 years.  This value is passed to the KernelAlert Utility where the actual archiving and deletion ofalerts/notifications occurs.

## Properties

Property | Value
--- | ---
Summary | Grace Period Before Deletion
Value Type | numeric
Value Domain | 0:100000:0
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}