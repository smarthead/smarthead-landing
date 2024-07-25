import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

exports.onCreateWebpackConfig = ({ actions }: any) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};
