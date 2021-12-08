import React from 'react';
import { css } from '@emotion/css';
import { SelectableValue } from '@grafana/data';
import { RadioButtonGroup } from '@grafana/ui';
import { ExploreGraphStyle, EXPLORE_GRAPH_STYLES } from 'app/core/utils/explore';

const ALL_GRAPH_STYLE_OPTIONS: Array<SelectableValue<ExploreGraphStyle>> = EXPLORE_GRAPH_STYLES.map((style) => ({
  value: style,
  // capital-case it and switch `_` to ` `
  label: style[0].toUpperCase() + style.slice(1).replace(/_/, ' '),
}));

const spacing = css({
  display: 'flex',
  justifyContent: 'space-between',
});

type Props = {
  graphStyle: ExploreGraphStyle;
  onChangeGraphStyle: (style: ExploreGraphStyle) => void;
  withAutoBreakdowns: boolean;
};

export function ExploreGraphLabel(props: Props) {
  const { graphStyle, onChangeGraphStyle, withAutoBreakdowns } = props;
  let graphStyleOptions = ALL_GRAPH_STYLE_OPTIONS;
  if (!withAutoBreakdowns) {
    graphStyleOptions = graphStyleOptions.filter((option) => option.value !== 'auto_breakdowns');
  }
  return (
    <div className={spacing}>
      Graph
      <RadioButtonGroup size="sm" options={graphStyleOptions} value={graphStyle} onChange={onChangeGraphStyle} />
    </div>
  );
}